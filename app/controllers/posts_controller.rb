class PostsController < ApplicationController

	def index

		respond_with Post.all
	end

	def create

		flash[:success] = "The post was created successfully!" if post_params

		flash[:notice] = "The post was not created" if !post_params

		respond_with Post.create(post_params)
	end

	def show

		respond_with Post.find(params[:id])
	end

	def upvote

		post = Post.find(params[:id])

		post.increment!(:upvotes)

		respond_with post
	end

	private

	def post_params

		params.require(:post).permit(:link, :title)
	end


end
