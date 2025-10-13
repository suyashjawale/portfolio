import json

data = None
with open("birthday.json") as f:
    data = json.loads(f.read())

final_data = {}

for k,i in enumerate(data.keys()):
    final_data[i] = []
    for d,j in enumerate(data[i]):
        j['name']=''
        j['uid'] = f"{i}-{d}"
        j['phone_no'] = []
        j['social_media'] = [j['public_profile']]
        j.pop('public_profile')
        j['met_year'] = ""
        j['met_destinantion'] = ""
        j['profile_pic'] = []
        final_data[i].append(j)


with open("format.json","w") as f:
    f.write(json.dumps(final_data, indent=4))

