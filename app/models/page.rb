class Page < ApplicationRecord
  has_many :sections
  belongs_to :category
end
