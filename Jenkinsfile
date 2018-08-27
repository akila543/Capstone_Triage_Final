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



    }
}
