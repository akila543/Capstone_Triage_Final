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
        stage('BuildDockerimages'){
        steps{

        sh '''chmod 0777 /home/akila/.jenkins/workspace/Capstone_pipeline/build.sh'''
    	sh '''cd /home/akila/.jenkins/workspace/Capstone_pipeline
    	'''
    	sh '''./build.sh'''
        }
        }



    }
}
