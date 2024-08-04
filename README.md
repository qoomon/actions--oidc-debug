# OIDC Debug &nbsp; [![Actions](https://img.shields.io/badge/qoomon-GitHub%20Actions-blue)](https://github.com/qoomon/actions)
An action to print OIDC token payload

## Inputs
```yaml
inputs:
  oidc-token:
    description: 'An OIDC token'
```
    
#### Release New Action Version
- Trigger the [Release workflow](../../actions/workflows/release.yaml)
  - The workflow will create a new release with the given version and also move the related major version tag e.g. `v1` to point to this new release
