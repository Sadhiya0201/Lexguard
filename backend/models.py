from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional

class ClauseAnalysis(BaseModel):
    id: str
    original_text: str
    risk_level: str # 'HIGH', 'MEDIUM', 'LOW'
    category: str # 'Financial', 'Privacy', 'Liability', 'Ambiguity'
    advocate_critique: str
    defender_rebuttal: str
    judge_verdict: str

class DebateState(BaseModel):
    document_id: str
    document_text: str
    identified_clauses: List[ClauseAnalysis] = []
    current_clause_index: int = 0
    overall_risk_score: int = 0
    final_verdict: str = ""
    status: str = "pending"

class UploadResponse(BaseModel):
    document_id: str
    message: str

class AnalysisRequest(BaseModel):
    document_id: str
