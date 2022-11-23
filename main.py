import conection as c

conexao = c.conecta('152.70.214.62','Hildean.Dantas','cachoromolhado','PROJETO_RH')

cursor = conexao.cursor(buffered = True) 

sql = "SELECT * FROM t_area;"

cursor.execute(sql)

final_result = [i for i in cursor.fetchall()]

print(final_result)
  
cursor.close()
conexao.commit()
conexao.close()