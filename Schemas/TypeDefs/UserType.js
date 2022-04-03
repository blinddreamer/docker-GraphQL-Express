const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    TITLE: { type: GraphQLString },
    DESCRIPTION: { type: GraphQLString },
    KEYWORDS: { type: GraphQLString },
    AUTHOR: { type: GraphQLString },
    TEXT1: { type: GraphQLString },
    TEXT2: { type: GraphQLString },
    TEXT3: { type: GraphQLString },
    TWITTER: { type: GraphQLString },
    DOCKER: { type: GraphQLString },
    GITHUB: { type: GraphQLString },
    EMAIL: { type: GraphQLString },
    COPY: { type: GraphQLString },
    MENU1: { type: GraphQLString },
    MENU2: { type: GraphQLString },
    MENU1LINK: { type: GraphQLString },
  }),
});

module.exports = UserType;