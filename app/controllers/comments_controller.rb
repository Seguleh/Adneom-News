class CommentsController < ApplicationController

	def create

		post = Post.find(params[:post_id])

		comment = post.comments.create(comment_params)

		@comment = post.comments.create(comment_params)

		if @comment
	  		flash[:success] = "You have successfully entered a new comment!"
	  	else
	  		flash[:alert] = "Please don't leave anything empty!"
	  	end

		respond_with post, comment
	end

	def upvote

		post = Post.find(params[:post_id])

		comment = post.comments.find(params[:id])

		comment.increment!(:upvotes)

		respond_with post, comment
	end

	private

	def comment_params

		params.require(:comment).permit(:body, :author)
	end

end
