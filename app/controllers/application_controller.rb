class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  # before_action :authorize!
  helper_method :current_user
  
  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end
  
  def authorize!
    if user_signed_in?
      redirect_to links_path
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
