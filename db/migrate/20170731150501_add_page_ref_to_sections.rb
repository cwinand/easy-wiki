class AddPageRefToSections < ActiveRecord::Migration[5.1]
  def change
    add_reference :sections, :page, foreign_key: true
  end
end
