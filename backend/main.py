import json
import asyncio
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
from models import UploadResponse, AnalysisRequest
from agents import run_debate_stream

app = FastAPI(title="LEXGUARDAI API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "LEXGUARDAI Engine v2.0 Online"}

@app.post("/upload", response_model=UploadResponse)
async def upload_document(file: UploadFile = File(...)):
    """
    Mock upload endpoint. In a real app, this would extract text and save to Supabase.
    """
    if not file.filename.endswith(('.pdf', '.docx', '.txt')):
        raise HTTPException(status_code=400, detail="Unsupported file format")
    
    # Generate a mock document ID
    doc_id = "doc_" + str(hash(file.filename))[-8:]
    return UploadResponse(document_id=doc_id, message="Document uploaded successfully.")

@app.get("/stream-debate")
async def stream_debate(document_id: str):
    """
    SSE endpoint that streams the LangGraph debate back to the frontend.
    """
    async def event_generator():
        mock_text = "Simulated contract text for document " + document_id
        
        async for log_entry in run_debate_stream(mock_text):
            # Yielding the data as a JSON string for SSE
            yield {
                "event": "message",
                "data": json.dumps(log_entry)
            }
        
        # Send a final 'done' event
        yield {
            "event": "done",
            "data": json.dumps({"status": "completed"})
        }

    return EventSourceResponse(event_generator())

if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
