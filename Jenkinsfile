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



    }
}
