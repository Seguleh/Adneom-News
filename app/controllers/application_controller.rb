class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  after_filter { flash.discard if request.xhr? }, only: :show

  def index
  	render 'layouts/application'
  end

end
