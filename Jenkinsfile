pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh '''cd core && npm install && npm run build'''
            }
         
        }
        stage('Testing'){
        steps{
        sh'''npm run test'''
        }
        }
        stage('FunctionalTesting'){
        steps{
        sh '''cd core && npm start '''
        sh '''node selenium-test.js'''
        }
        }
        stage('Code_Quality'){
        steps{
        build job: 'Code_Quality'
        }
        post{
        success{
        build job: 'Ansible_Deployment'
        }
        failure {
        echo 'Code Quality has failed'
        input message: 'Approve for deployment?'
        build job: 'Ansible_Deployment'
        }
        }
        }



    }
}
