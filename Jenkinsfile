pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS_ID = 'Docker-Creds'
        FRONTEND_IMAGE = 'mukeshsaini7/bedsheet-frontend'
        BACKEND_IMAGE = 'mukeshsaini7/bedsheet-backend'
    }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/mukeshsaini143/react-springboot-application.git'
            }
        }
        stage('Build Frontend') {
            steps {
                dir('react-springboot-application/frontend/bedsheet-shop-frontend') {
                    sh '''
                        rm -rf node_modules package-lock.json
                        npm cache clean --force
                        npm install
                        npm install axios
                        npm run build
                    '''
                }
            }
        }
        stage('Build Backend') {
            steps {
                dir('react-springboot-application/backend/product-service') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("${FRONTEND_IMAGE}:latest", "react-springboot-application/frontend/bedsheet-shop-frontend")
                    docker.build("${BACKEND_IMAGE}:latest", "react-springboot-application/backend/product-service")
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${FRONTEND_IMAGE}:latest").push()
                        docker.image("${BACKEND_IMAGE}:latest").push()
                    }
                }
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs.'
        }
    }
}
