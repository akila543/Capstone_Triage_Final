pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh '''cd core'''
                sh '''npm install'''
                sh '''npm run build'''
            }
         
        }
        



    }
}
