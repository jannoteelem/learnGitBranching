exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"jdoe/FLEXSDK-123\":{\"target\":\"C3\",\"id\":\"jdoe/FLEXSDK-123\",\"remoteTrackingBranchID\":null},\"releases/3.2\":{\"target\":\"C3\",\"id\":\"releases/3.2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"tags\":{\"3.2.0-rc1\":{\"target\":\"C3\",\"id\":\"3.2.0-rc1\"},\"internal-release-3.2.0\":{\"target\":\"C3\",\"id\":\"internal-release-3.2.0\"},\"public-release-3.2.0\":{\"target\":\"C3\",\"id\":\"public-release-3.2.0\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout -b jdoe/FLEXSDK-123;git commit;git commit;git checkout master;git merge jdoe/FLEXSDK-123;git tag 3.2.0-rc1 master;git branch releases/3.2 3.2.0-rc1;git tag internal-release-3.2.0 releases/3.2;git tag public-release-3.2.0 releases/3.2",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Major or Minor Release"
  },
  "hint": {
    "en_US": ""
  },
  "index": 1,
  "id": "twilio2",
  "sequenceName": "twilio",
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Major or Minor Release",
              "",
              "Let's make a public release 3.2.0",
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
              "Create a development branch from the main branch [youralias]/FLEXSDK-[ticketnumber]."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git co -b jdoe/FLEXSDK-123;",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Run npm version 3.2.0 --no-git-tag to update version in package.json. Let's visualize this as commit c2."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git commit;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;"
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
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create a new pull request to merge your branch to the main branch. Have it approved and merged."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git co master;\ngit merge jdoe/FLEXSDK-123;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;\ngit commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Go to Github Draft Release, enter 3.2.0-rc1 as tag and choose the master branch."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag 3.2.0-rc1 master;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;\ngit commit;\ngit co master;\ngit merge jdoe/FLEXSDK-123;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create the release branch named releases/3.2 (do not add the patch version number) from the release candidate tag 3.2.0-rc1 and push it."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git branch releases/3.2 3.2.0-rc1;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;\ngit commit;\ngit co master;\ngit merge jdoe/FLEXSDK-123;\ngit tag 3.2.0-rc1 master;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Go to Github Draft Release, enter internal-release-3.2.0 as tag and choose the release branch releases/3.2 "
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag internal-release-3.2.0 releases/3.2;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;\ngit commit;\ngit co master;\ngit merge jdoe/FLEXSDK-123;\ngit tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "The last step is to publish the internal release to the public NPM registry. Tag the same commit from which you built the internal release with tag public-release-3.2.0."
            ],
            "afterMarkdowns": [
              " "
            ],
            "command": "git tag public-release-3.2.0 releases/3.2;",
            "beforeCommand": "git co -b jdoe/FLEXSDK-123;\ngit commit;\ngit commit;\ngit co master;\ngit merge jdoe/FLEXSDK-123;\ngit tag 3.2.0-rc1 master;\ngit branch releases/3.2 3.2.0-rc1;\ngit tag internal-release-3.2.0 releases/3.2;"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Congratulations! You have released a new public version 3.2.0."
            ]
          }
        }
      ]
    }
  }
};