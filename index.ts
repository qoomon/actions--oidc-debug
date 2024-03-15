import * as core from '@actions/core'
import * as github from '@actions/github'
import {HttpClient} from '@actions/http-client'
import {exec, getInput, getYamlInput, run} from './lib/actions.js'
// see https://github.com/actions/toolkit for more github actions libraries
import {z} from 'zod'
import {fileURLToPath} from 'url'

export const action = () => run(async () => {
  const context = github.context
  const input = {
    oidcToken: getInput('oidc-token') ?? await core.getIDToken(),
  }

  const tokenPayload = JSON.parse(Buffer.from(input.oidcToken.split('.')[1], 'base64').toString())
  
  core.info('OIDC Token Payload: ' + JSON.stringify(tokenPayload, null, 2)
})

// Execute the action, if running as main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  action()
}
