class AddPageToCategory < ActiveRecord::Migration[5.1]
  def change
    add_reference :pages, :category, index: true
    add_foreign_key :pages, :categories
  end
end
