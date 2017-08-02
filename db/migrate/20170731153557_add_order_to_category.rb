class AddOrderToCategory < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :order, :int
  end
end
