pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                git branch: 'main', url: 'https://github.com/Lucasviggiano/teste-e2e-ebac.git'
                bat 'npm install'
            }
        }
         stage('teste') {
            steps {
                bat '''set NO_COLOR=1
npm teste'''
        
            }
        }
    }
}
