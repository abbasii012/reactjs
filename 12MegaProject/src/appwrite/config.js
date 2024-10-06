import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";


export  class Services{
    client = new Client()
    database;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    async createPost({title,slug,content,featureImage,
        status,userid}){
        try {
            return await this.database.createDocument(
            conf.appwriteaDatabaseId,
            conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userid,
                }
            )
            
        } catch (error) {
            console.log("appwrite services :: createPost ::error",error);

        }
    }

    async updatePost(slug,{title,content,featureImage,
        status}){
        try {
            return await this.database.updateDocument(
            conf.appwriteaDatabaseId,
            conf.appwriteCollectionId,
             slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("appwrite services :: updatePost ::error",error);

        }
    }

    async deletePost(slug){
        try {
         await this.database.deleteDocument(conf.appwriteaDatabaseId,
            conf.appwriteCollectionId,
             slug  
            )
            return true
            
        } catch (error) {
            console.log("appwrite services :: deletePost ::error",error);
            return false 

        }
    }

    async getPost(slug){
        try {
          return await this.database.getDocument(
          conf.appwriteaDatabaseId,
          conf.appwriteCollectionId,
             slug  
            )      
        } catch (error) {
            console.log("appwrite services :: getPost ::error",error);
            return false 

        }
    }

    async getPosts(quaries = [Query.equal("status","active")]){
        try {
          return await this.database.listDocuments(
             conf.appwriteaDatabaseId,
             conf.appwriteCollectionId,
             quaries 
            )      
        } catch (error) {
            console.log("appwrite services :: getPosts ::error",error);
            return false 

        }
    }
    
    // file upload methods

    async uploadFile(file){
     try {
        return await this.bucket.createFile(conf.appwriteBucketId,
            ID.unique(),
            file
        )
        
     } catch (error) {
        console.log("appwrite services :: uploadFile ::error",error);
        return false 
     }
    }

    async deleteFile(fileID){
        try {
           return await this.bucket.deleteFile(conf.appwriteBucketId,
               fileID
           )
           return true
        } catch (error) {
           console.log("appwrite services :: deleteFile ::error",error);
           return false 
        }
       }

    getFilePreview(fileID){
      return this.bucket.getFilePreview(conf.appwriteBucketId,fileID)
    }

} 

const appwriteService = new Services()
export default appwriteService