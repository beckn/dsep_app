pipeline {
  agent 'jenkins-android-build-ubuntu'
  tools {
    nodejs 'nodejs19'
  }
  stages {
    stage('Checkout') {
      steps {
        sh '''
        #echo $GIT_URL
        git clone $GIT_URL
        '''
      }
    }
    stage('Build') {
      steps {
        sh '''
        pwd
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
