require 'rails_helper'


describe "GraphQL API" do
  let(:query_string) { %|{ test }| }

  it "accepts post requests" do
    post "/graphql"
    expect(status).to eq(200)
  end

  it "errors without a query" do
    post "/graphql"
    expect(first_error_message).to eq("No query string was present")
  end

  it "returns data" do
    post"/graphql", params: { query: query_string }
    expect(result["test"]).to be_truthy
  end
end
