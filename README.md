# Monitoring Pull Requests

Spike for testing the GitHub webhooks and API for pull requests.

**Usage:**
  * Clone the repo
  * cd into the repo's testApp directory and run **npm install && npm start** (with NodeJS installed) to install and run the webapp
  * In a new terminal window, cd into the repo directory and run **./ngrok http 3000** to allow outside access to the webapp on localhost
  * Go to https://github.com/joeldudley/test/settings/hooks/10832159 and change and update the Payload URL to the ngrok http forwarding address given in the second terminal window (of the form http://529de8ba.ngrok.io)
  * You can now:
    * See a notification in the first terminal window when a new pull request is opened (an example of the GitHub webhook functionality)
    * See a list of open pull requests by going to **http://localhost:3000** (an example of the GitHub API functionality)
