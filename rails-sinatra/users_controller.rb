class UsersController < ApplicationController

  def new
    @user = User.new
  end
  # get /users/new

  def create
    @user = User.create
    redirect_to user_path(@user)
  end
  # post /users

  def index
    @users = User.all
  end
  # get /users

  def show
    @user = User.find(params[:id])
  end
  # get /users/:id

  def edit
    @user = User.find(params[:id])
  end
  # get users/:id/edit

  def update
    @user = User.find(params[:id])
    @user.update(params[])
    redirect_to user_path(@user)
  end
  # post users/:id/edit

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path
  end
  # delete users/:id

end


# Write the controller action as if this was a rails controller
# Write the url that sends a user to the action. I have done the first one for you.
