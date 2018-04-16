Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The root query of this schema"

  field :test, types.String do
    description "An example field"
    resolve ->(obj, args, ctx) {
      "Successful test!"
    }
  end
end
