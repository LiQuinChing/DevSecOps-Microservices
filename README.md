# DevSecOps-Microservices

# 🛒 Secure E-Commerce Microservices Platform

## Overview

This project is a fully cloud-native, DevSecOps-driven E-Commerce platform built using a microservices architecture. It demonstrates modern security practices, independent CI/CD pipelines, and multi-language backend services securely orchestrated inside an Azure Kubernetes Service (AKS) cluster.

## 🏗️ Architecture & Technologies

  * **Frontend:** React.js (Vite) served securely via Nginx.
  * **Backend Services:** A polyglot architecture utilizing Java (Spring Boot), Go, and Node.js (Express).
  * **Database:** MongoDB Atlas (Cloud).
  * **API Gateway:** Envoy Kubernetes Gateway for unified routing.
  * **DevSecOps:** GitHub Actions, Azure Container Registry (ACR), Chainguard Distroless container images, and Kubernetes Secrets.

-----

## 🔌 Service & Port Mapping

The platform runs on an internal Kubernetes DNS network. The Envoy Gateway exposes the application publicly, securely routing traffic to the internal ports below:

| Service Name | Tech Stack | Internal Port | Base API Route | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend App** | React / Nginx | `8080` | `/` | User interface and static assets. |
| **User Service** | Java / Spring Boot | `8081` | `/api/users` | Identity management, auth, and JWT generation. |
| **Payment Service** | Java / Spring Boot | `8083` | `/api/payments` | Transaction processing and payment history. |
| **Order Service** | Go | `8080` | `/api/orders` | Manages customer orders and carts. |
| **Product Service** | Node.js / Express | `5000` | `/api/products` <br>`/api/suppliers` | Inventory management and image uploads. |

-----

## 📡 Inter-Service Communication

The microservices communicate using **Synchronous REST APIs** over the isolated internal Kubernetes network.

1.  **Ingress Routing (Public to Private):** External traffic hits the Envoy Gateway, which routes requests to the React Frontend. The Nginx reverse proxy inside the frontend container resolves CORS issues by intercepting `/api/*` calls and forwarding them to the respective backend K8s services.
2.  **Product to Order (Internal API Call):** When a user adds an item to their cart, the `product-service` verifies and decrements the stock, then makes an internal HTTP POST request directly to the `order-service` (`http://order-service:8080/orders`) to generate the order invoice. The user's JWT token is dynamically forwarded in the request headers to maintain security.
3.  **Payment to User (Internal API Call):**
    Before finalizing a transaction, the `payment-service` makes an internal call to the `user-service` (`http://user-service:8081/users/{id}`) to validate that the customer account exists and is active.

-----

##  DevSecOps & Security Features

  * **Zero-Vulnerability Containers:** All Dockerfiles utilize multi-stage builds and **Chainguard Distroless** base images (0 known CVEs). Shell access (`/bin/sh`) is completely removed from the production environment.
  * **Least Privilege:** All K8s pods run as unprivileged `nonroot` users. Kubernetes `securityContext` (fsGroup) is used to grant explicit, restricted permissions for volume mounts (e.g., image uploads).
  * **Secure Secret Management:** Database credentials are never hardcoded. `MONGO_URI` connection strings are stored in GitHub Secrets and dynamically injected into the cluster as Kubernetes Secrets during deployment.
  * **Automated CI/CD:** Independent GitHub Actions pipelines monitor specific directories. Pushing code automatically builds, tags, pushes to Azure ACR, and triggers a zero-downtime rolling K8s deployment.

-----

##  Quick Start / Deployment Guide

**1. Connect to the Azure Kubernetes Cluster:**

```bash
az aks get-credentials --resource-group <RESOURCE_GROUP> --name <CLUSTER_NAME>
```

**2. Deploy the Microservices:**

```bash
kubectl apply -f k8s/user-service.yaml
kubectl apply -f k8s/payment-service.yaml
kubectl apply -f k8s/apps/order-app.yaml
kubectl apply -f k8s/apps/product-app.yaml
kubectl apply -f k8s/apps/frontend-app.yaml
```

**3. Deploy the Envoy Gateway & Routes:**

```bash
kubectl apply -f k8s/gateway/gateway-cls.yaml
kubectl apply -f k8s/gateway/gateway.yaml
kubectl apply -f k8s/gateway/route.yaml
```

**4. Access the Application:**
Retrieve the public IP address of the Envoy Gateway:

```bash
kubectl get gateway ecommerce-gateway
```

*Open the provided IP address in your web browser to access the platform.*

-----

Would you like me to help you format this into a PDF or provide instructions on how to add this directly to your GitHub repository's main branch?
