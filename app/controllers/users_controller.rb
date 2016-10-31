class UsersController < ApplicationController
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      flash[:alert] = "User created"
      session[:user_id] = @user.id
      redirect_to links_path
    else
      flash[:failure] = @user.errors.full_messages.first
      render :new
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end