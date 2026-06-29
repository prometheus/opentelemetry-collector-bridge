# Releases

There is no automated publishing step. A Go module
release is made by creating a SemVer git tag with a `v` prefix and publishing a
GitHub Release for that tag.

## Before Cutting a Release

1. Scan open issues and pull requests, and try to merge anything that is ready
   or nearly ready for the release.
2. Notify the maintainers listed in [CODEOWNERS](.github/CODEOWNERS) that you
   plan to cut a release.
3. Confirm the release candidate is on `main`, synced with `origin/main`, and
   has no uncommitted changes.
4. Run the release checks:

   ```sh
   go test ./...
   go test -race ./...
   go vet ./...
   go mod verify
   go mod tidy -diff
   golangci-lint run
   govulncheck ./...
   ```

## Cutting a Release

1. Choose the next version according to SemVer. While the module is
   experimental, prefer `v0.x.y` releases.
2. Create a new GitHub Release:

   <https://github.com/prometheus/opentelemetry-collector-bridge/releases/new>

3. Create or select a tag named with a `v` prefix, for example `v0.1.0`.
4. Generate release notes with GitHub's "Generate release notes" button.
5. Review the release notes and call out any breaking changes, security fixes,
   or minimum Go version changes.
6. Leave "Set as the latest release" enabled for normal releases. Do not mark
   the release as a pre-release unless cutting an explicit release candidate.
7. Publish the release.

## Versioning Strategy

This module aims to follow [Semantic Versioning](https://semver.org/) as much
as possible:

- Patch releases, such as `v0.1.1`, should contain bug fixes only.
- Minor releases, such as `v0.2.0`, may contain new functionality or behavior
  changes.
- Breaking changes must be clearly documented in the GitHub Release notes.
