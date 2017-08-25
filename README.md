# Overview

Collaborative Online Judge System (COJ) is a full-stack system supporting collaborative code editing, 	compiling, execution and result judgement. This document covers the details of the implementation of Collaborative Editor and User Code Executor from an engineering perspective. 	

# Major Use Cases

1.User can use interactive code editor to edit code. Supported languages are Java, C++ and Python. In addition, we need to keep the capacity for new languages. 

2.Multiple users can edit the same piece of code simultaneously. Each user’s change can be seen and applied to every other user’s code immediately. 

3.User can compile the code by clicking ‘compile’ button. The compile result will be displayed to user.

4.User can run the code by clicking ‘run’ button. The execution result will be displayed to user.

5.User can browse pre-stored coding problem list.

6.User can get details of a specific coding problem by clicking the problem in the list.

7.User can submit the code through ‘submit’ button to submit the code to solve the chosen question. The result, including compiling, correctness and running time, will be displayed to user. 

8.User’s submissions will be recorded for reference. 

9.User can check his progress / statistics for questions.

10.Admin can manually add new problem.

# High-level Stack Diagram

	

<img width="582" alt="screen shot 2017-07-20 at 12 05 27 pm" src="https://user-images.githubusercontent.com/14023214/28545648-abad7876-707c-11e7-82f9-6193884147bb.png">


