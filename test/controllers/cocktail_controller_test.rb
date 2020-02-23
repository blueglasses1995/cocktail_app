require 'test_helper'

class CocktailControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cocktail_index_url
    assert_response :success
  end

end
