class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :authorize!
  helper_method :current_user
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  
  def authorize!
    if user_signed_in?
      super
    else
      flash[:error] = "Please login first"
      redirect_to login_path
    end
  end
  
  def user_signed_in?
    if session[:user_id]
      return true
    else
      return false
    end
  end
  
end
