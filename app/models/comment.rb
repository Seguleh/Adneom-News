class Comment < ActiveRecord::Base

	validates :body,  presence: true, length: {maximum: 150}
	validates :author,  presence: true, length: {maximum: 25}

	belongs_to :post

end