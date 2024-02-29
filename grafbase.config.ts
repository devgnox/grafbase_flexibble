import { graph, config, auth,scalar  } from '@grafbase/sdk'

const g = graph.Standalone()

const User = g.type('User', {
  name: g.string(),
  email:g.email(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkedInUrl:g.url().optional(),
  project: g.ref(Project).list()
})

const Project=g.type('Project', {
  title: g.string(),
  description:g.string().optional(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url().optional(),
  category:scalar.string(),
  createdBy:g.ref(User)
})

export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },

})
