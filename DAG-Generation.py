# Practical 05: DAG Generation

# pip install networkx
# pip install sympy

import networkx as nx
import matplotlib.pyplot as plt
from sympy import parse_expr

# function to create a DAG from a mathematical expression
def create_expression_dag(expression):
    G = nx.DiGraph()
    parsed_expr = parse_expr(expression,evaluate=False)

    def add_nodes_and_edges(expr):
        if expr.is_Atom:
            G.add_note(expr)
        else:
            for arg in expr.args:
                G.add_edge(expr, arg)
                add_nodes_and_edges(arg)

    add_nodes_and_edges(parsed_expr)

    return G

# Mathematical Expression
expression = "2+3+5*2+2+3"

#create DAG 
dag = create_expression_dag(expression)

# Draw and display the DAG
pos = nx.spring_layout(dag)
nx.draw(dag, with_labels=True,node_size=500,node_color="lightblue", font_size=10)
plt.title("Expression DAG")
plt.show()
