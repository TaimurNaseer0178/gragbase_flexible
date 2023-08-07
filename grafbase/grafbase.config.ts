import { g, auth, config } from '@grafbase/sdk'

const User=g.model('User',{name:g.string().length({min:2,max:2}),
email:g.string().unique(),
avatorUrl:g.url(),
description:g.string().optional(),
githubUrl:g.url().optional(),
linkedUrl:g.url().optional(),
projects:g.relation(()=>projects).list().optional(),

})
const projects=g.model('projects',{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().optional(),
  createdBy:g.relation(()=>User,)
})

export default config({
  schema: g

})
