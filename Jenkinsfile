pipeline {
  agent any
  tools {
    nodejs 'nodejs14'
  }
  stages {
    stage('Checkout') {
      steps {
        sh 'git clone ${GIT_REPO}'
      }
    }
    stage('Build') {
      steps {
        sh ''' 
        cd beckn-exp-guide-ui
        git checkout "${GIT_BRANCH}"
        rm package-lock.json
        npm install
        CI=false npm run-script build 
        '''          
      }
    }
    stage('Deploy') {
      steps {
        sh '''
        cd beckn-exp-guide-ui
        aws s3 cp --recursive build/ "${S3_BUCKET}"
        aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" --paths "/*"
        '''
      }
    }
  }
  post {
    always {
        cleanWs(cleanWhenNotBuilt: true,
            deleteDirs: true,
            disableDeferredWipeout: true,
            notFailBuild: true,
            patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
            [pattern: '.propsfile', type: 'EXCLUDE']])
        }
    }
}
