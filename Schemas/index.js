const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../MOCK_DATA.json");

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
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
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          title: args.TITLE,
          description: args.DESCRIPTION,
          email: args.KEYWORDS,
          author: args.AUTHOR,
          text1: args.TEXT1,
          text2: args.TEXT2,
          text3: args.TEXT3,
          twitter: args.TWITTER,
          docker: args.DOCKER,
          github: args.GITHUB,
          email: args.EMAIL,
          copy: args.COPY,
          MENU1: args.MENU1,
          MENU2: args.MENU2,
          MENU2LINK: args.MENU2LINK,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });