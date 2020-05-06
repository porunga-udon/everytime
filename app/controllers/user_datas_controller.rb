class UserDatasController < ApplicationController
  def new
    @data = UserDatum.new
  end

  def create
  end
end
