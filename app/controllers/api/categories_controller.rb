class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :show_pages, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # GET /categories/1/pages
  def show_pages
    render json: @category.pages
  end

  # POST /categories
  def create
    @category = Category.new(category_params)
    @category.order = Category.all.count

    if @category.save
      render json: @category, status: :created, location: @api_category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PUT /categories
  # Right now, the only mass update needed is for the order of a category
  # Will have to update this controller method if another mass update field is needed
  def update_all
    @categories = Category.where(id: params[:ids])

    @categories.each do |category|
      params[:updates].each do |update|
        if update[:id] == category[:id]
          category.update(order: update[:order])
        end
      end
    end

    render json: @categories
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:title)
    end
end
