module Requests
  module JsonHelpers

    # A JSON parsed response
    def response_as_json
      @response_as_json ||= JSON.parse(response.body)
    end

    # shorthand for grabbing the 'data' element from the response
    def result
      response_as_json["data"]
    end

    # pluck the first error message from the response
    def first_error_message
      response_as_json["errors"].first["message"]
    end
  end
end
