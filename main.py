import conection as c
import json

print("a")

with open('config.json', 'r') as j:
     config = json.loads(j.read())
print(config)

conexao = c.conecta('152.70.214.62','projetos','@g0r@vai4002','PROJETO_RH')

cursor = conexao.cursor(buffered = True) 

sql = "SELECT * FROM t_area;"

cursor.execute(sql)

final_result = [i for i in cursor.fetchall()]

print(final_result)
  
cursor.close()
conexao.commit()
conexao.close()