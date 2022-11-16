import {TodoItem} from "../../../../../../../serverless/Serverless_App/backend/src/models/TodoItem";
import {parseUserId} from "../../../../../../../serverless/Serverless_App/backend/src/auth/utils";
import {CreateTodoRequest} from "../../../../../../../serverless/Serverless_App/backend/src/requests/CreateTodoRequest";
import {UpdateTodoRequest} from "../../../../../../../serverless/Serverless_App/backend/src/requests/UpdateTodoRequest";
import {TodoUpdate} from "../../../../../../../serverless/Serverless_App/backend/src/models/TodoUpdate";
import {ToDoAccess} from "../dataLayer/ToDoAccess";

const uuidv4 = require('uuid/v4');
const toDoAccess = new ToDoAccess();

export async function getAllToDo(jwtToken: string): Promise<TodoItem[]> {
    const userId = parseUserId(jwtToken);
    return toDoAccess.getAllToDo(userId);
}

export function createToDo(createTodoRequest: CreateTodoRequest, jwtToken: string): Promise<TodoItem> {
    const userId = parseUserId(jwtToken);
    const todoId =  uuidv4();
    const s3BucketName = process.env.S3_BUCKET_NAME;
    
    return toDoAccess.createToDo({
        userId: userId,
        todoId: todoId,
        attachmentUrl:  `https://${s3BucketName}.s3.amazonaws.com/${todoId}`, 
        createdAt: new Date().getTime().toString(),
        done: false,
        ...createTodoRequest,
    });
}

export function updateToDo(updateTodoRequest: UpdateTodoRequest, todoId: string, jwtToken: string): Promise<TodoUpdate> {
    const userId = parseUserId(jwtToken);
    return toDoAccess.updateToDo(updateTodoRequest, todoId, userId);
}

export function deleteToDo(todoId: string, jwtToken: string): Promise<string> {
    const userId = parseUserId(jwtToken);
    return toDoAccess.deleteToDo(todoId, userId);
}

export function generateUploadUrl(todoId: string): Promise<string> {
    return toDoAccess.generateUploadUrl(todoId);
}