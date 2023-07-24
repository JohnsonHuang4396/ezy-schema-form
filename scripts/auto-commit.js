import readline from 'readline'
import { execSync } from 'child_process'

function getVersion() {
  try {
    execSync('pnpm update:version')
  } catch (error) {
    console.error('Failed to execute update:version:', error.message)
    process.exit(1)
  }
}

function getStagedPackages() {
  const output = execSync('git diff --name-only').toString()
  const files = output.split('\n')
  const packages = new Set()

  // Filter package names from the staged files
  files.forEach(file => {
    if (file.startsWith('packages/')) {
      const packageName = file.split('/')[1]
      packages.add(packageName)
    }
  })

  return Array.from(packages)
}

function commitChanges(packageName, commitMessage) {
  let command = `git commit -m "${commitMessage}"`

  if (packageName) {
    command += ` -- packages/${packageName}`
  }

  try {
    execSync(command)
    console.log('Changes committed successfully.')
  } catch (error) {
    console.error('Failed to commit changes:', error.message)
    process.exit(1)
  }
}

// Main entry point
function main() {
  const args = process.argv.slice(2)

  if (args[0] === '-f') {
    const packageName = args[1]

    // Skip package selection and directly prompt for commit message
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question('Please enter the commit message: ', commitMessage => {
      rl.close()
      commitChanges(packageName, commitMessage)
    })
  } else {
    getVersion()

    const packages = getStagedPackages()

    // Display package names for selection
    console.log('Staged packages:')
    console.log(packages.join('\n'))

    if (!packages.length) {
      console.log('Nothing in package changed!')
      process.exit(1)
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(
      'Enter the package name to commit changes, or press Enter to skip: ',
      packageName => {
        rl.close()

        if (packageName) {
          const commitRl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          })
          commitRl.question('Enter the commit message: ', message => {
            commitRl.close()

            commitChanges(packageName, message)
          })
        } else {
          console.log('Skipping package selection.')
        }
      }
    )
  }
}

main()
