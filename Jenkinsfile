pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'ShopEasy source code is available in the workspace'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Automated Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t shopeasy:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'ShopEasy pipeline completed successfully!'
        }
        failure {
            echo 'ShopEasy pipeline failed. Check the console output.'
        }
    }
}
