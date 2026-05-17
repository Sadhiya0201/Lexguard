import os
import asyncio
from typing import Dict, TypedDict, Any, List
from langgraph.graph import StateGraph, END
import time

# Define the state schema for LangGraph
class AgentState(TypedDict):
    document_text: str
    current_clause: str
    advocate_analysis: str
    defender_analysis: str
    judge_verdict: str
    logs: List[Dict[str, str]]

async def extract_clauses_node(state: AgentState):
    # Mocking clause extraction
    await asyncio.sleep(1)
    clause = "Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months."
    logs = state.get("logs", [])
    logs.append({"agent": "System", "message": "Extracted clause for analysis: " + clause})
    return {"current_clause": clause, "logs": logs}

async def advocate_node(state: AgentState):
    await asyncio.sleep(2)
    analysis = """CLAUSE: Training Repayment Agreement Provision (TRAP)
RISK: HIGH
WHY: This clause transfers massive financial risk to the employee and acts as a shadow non-compete.
IMPACT: You could be financially locked into this job for 24 months, unable to quit without owing $15,000.
SUGGESTION: Demand removal or pro-rated amortization over 6 months."""
    logs = state.get("logs", [])
    logs.append({"agent": "Consumer Advocate", "message": analysis})
    return {"advocate_analysis": analysis, "logs": logs}

async def defender_node(state: AgentState):
    await asyncio.sleep(2)
    analysis = """CLAUSE: Training Repayment Agreement Provision (TRAP)
RISK: LOW (from corporate perspective)
WHY: The company invests significant capital into onboarding and specialized training.
IMPACT: Ensures ROI on new hires and prevents immediate poaching by competitors.
SUGGESTION: Maintain the clause, but perhaps offer a prorated scale if pushed by the candidate."""
    logs = state.get("logs", [])
    logs.append({"agent": "Corporate Defender", "message": analysis})
    return {"defender_analysis": analysis, "logs": logs}

async def judge_node(state: AgentState):
    await asyncio.sleep(2)
    verdict = """VERDICT: HIGH RISK (Score: 85)
RULING: The Consumer Advocate's point stands. While companies can recoup costs, $15,000 is disproportionately punitive for standard training.
ACTION REQUIRED: Do not sign as-is. Renegotiate the term to cap at $3,000 and amortize fully over 12 months."""
    logs = state.get("logs", [])
    logs.append({"agent": "Arbitrator Judge", "message": verdict})
    return {"judge_verdict": verdict, "logs": logs}

# Build the Graph
workflow = StateGraph(AgentState)

workflow.add_node("extract", extract_clauses_node)
workflow.add_node("advocate", advocate_node)
workflow.add_node("defender", defender_node)
workflow.add_node("judge", judge_node)

workflow.set_entry_point("extract")
workflow.add_edge("extract", "advocate")
workflow.add_edge("advocate", "defender")
workflow.add_edge("defender", "judge")
workflow.add_edge("judge", END)

app = workflow.compile()

async def run_debate_stream(document_text: str):
    """
    Generator that runs the LangGraph and yields SSE formatted JSON strings.
    """
    initial_state = {
        "document_text": document_text,
        "current_clause": "",
        "advocate_analysis": "",
        "defender_analysis": "",
        "judge_verdict": "",
        "logs": []
    }
    
    # We use astream to stream the execution of the graph
    async for output in app.astream(initial_state):
        # output is a dict of {node_name: node_state}
        for node_name, state_update in output.items():
            if "logs" in state_update and len(state_update["logs"]) > 0:
                latest_log = state_update["logs"][-1]
                yield latest_log
