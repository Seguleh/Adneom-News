class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  after_filter :clear_flash

  def index
  	render 'layouts/application'
  end

  def clear_flash
  	respond_to do |format|
  		format.js { render :js => "clear_msg();" }
  	end
  end

end
