class Post < ActiveRecord::Base
	
	validates :title,  presence: true, length: {maximum: 150}
	validates :link,  presence: true, length: {maximum: 150}

	has_many :comments

	def as_json(option = {})
		super(option.merge(include: :comments))
	end

end