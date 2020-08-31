exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C4%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22releases/3.2%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%22releases/3.2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22jdoe/FLEXSDK-123%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%22jdoe/FLEXSDK-123%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C5%22%5D%2C%22id%22%3A%22C3%27%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C6%22%7D%7D%2C%22tags%22%3A%7B%223.2.0-rc1%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%223.2.0-rc1%22%7D%2C%22internal-release-3.2.0-rc1%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22internal-release-3.2.0-rc1%22%7D%2C%22public-release-3.2.0%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22public-release-3.2.0%22%7D%2C%223.2.1-rc1%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%223.2.1-rc1%22%7D%2C%22internal-release-3.2.1-rc1%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%22internal-release-3.2.1-rc1%22%7D%2C%22public-release-3.2.1%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%22public-release-3.2.1%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22releases/3.2%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git commit;git commit;git commit;git branch jdoe/FLEXSDK-123 releases/3.2;git checkout jdoe/FLEXSDK-123;git commit;git cherry-pick c3;git commit;git checkout releases/3.2;git merge jdoe/FLEXSDK-123;git tag 3.2.1-rc1 releases/3.2;git tag internal-release-3.2.1-rc1 releases/3.2;git tag public-release-3.2.1 releases/3.2",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"releases/3.2\":{\"target\":\"C1\",\"id\":\"releases/3.2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{\"3.2.0-rc1\":{\"target\":\"C1\",\"id\":\"3.2.0-rc1\"},\"internal-release-3.2.0-rc1\":{\"target\":\"C1\",\"id\":\"internal-release-3.2.0-rc1\"},\"public-release-3.2.0\":{\"target\":\"C1\",\"id\":\"public-release-3.2.0\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Patch Release"
  },
  "hint": {
    "en_US": ""
  },
  "index": 0,
  "id": "twilio1",
  "sequenceName": "twilio",
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Patch Release",
              "",
              "The main difference with the major and minor releases is that <b> we must create patch releases only from the release branches</b>.",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's say we have already made release 3.2.0 and now we make some more commits in the master.",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              " ",
              "",
              "",
              ""
            ],
            "command": "git commit;\ngit commit;\ngit commit;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create a development branch from the release branch releases/3.2 including the JIRA ticket number [youralias]/FLEXSDK-[ticketnumber]."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Run npm version [major].[version].[PATCH] --no-git-tag to update the version in package.json. Let's visualize this as one more commit c5."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git commit;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Cherry pick the commit(s) from the main branch that you want to be included in the patch release. Push the commits to your development branch. c3 is the cherry-picked commit."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git cherry-pick c3;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Update changelog. Let's visualize this as one more commit."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git commit;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;\ngit cherry-pick c3;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create a pull request to merge your branch to the release branch releases/3.2. Have it approved and merged."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git co releases/3.2;\ngit merge jdoe/FLEXSDK-123;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;\ngit cherry-pick c3;\ngit commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Go to Github Draft Release, enter 3.2.1-rc1 as tag and choose the release branch (releases/3.2)."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag 3.2.1-rc1 releases/3.2;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;\ngit cherry-pick c3;\ngit commit;\ngit co releases/3.2;\ngit merge jdoe/FLEXSDK-123;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "If all tests passed, then go to Github Draft Release, enter internal-release-3.2.1 as tag and choose the release branch releases/3.2"
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag internal-release-3.2.1-rc1 releases/3.2;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;\ngit cherry-pick c3;\ngit commit;\ngit co releases/3.2;\ngit merge jdoe/FLEXSDK-123;\ngit tag 3.2.1-rc1 releases/3.2;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "The last step is to publish the internal release to the public NPM registry. Tag the same commit from which you built the internal release with tag public-release-3.2.1. The tag must be applied to a commit on the release branch."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag public-release-3.2.1 releases/3.2;",
            "beforeCommand": "git tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0-rc1 releases/3.2;\ngit tag public-release-3.2.0 releases/3.2;\ngit commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/3.2;\ngit co jdoe/FLEXSDK-123;\ngit commit;\ngit cherry-pick c3;\ngit commit;\ngit co releases/3.2;\ngit merge jdoe/FLEXSDK-123;\ngit tag 3.2.1-rc1 releases/3.2;\ngit tag internal-release-3.2.1-rc1 releases/3.2;"
          }
        }
      ]
    }
  }
};