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
            echo 'Functional test cases are disabled'
        }
        }
        stage('Code_Quality'){
        steps{
        build job: 'Code_Quality'
        }
        }
        stage('Ansible deployment')
        {
        steps{
        build job: 'Ansible_Deployment'
        }
        }


    }
}
