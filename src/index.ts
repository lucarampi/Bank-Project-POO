import express from 'express';
import transactions from './transactions.json';
import logged_user from './logged.json';
const port: string = "8000";
const app = express()

class User {
    private name: string;
    private cpf: string;
    private password: string;
    private balance: number = 0;
    private agency: string;
    private account: string;

    constructor(name: string, cpf: string, password: string, agency: string, account: string) {
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.agency = agency;
        this.account = account;
    }


    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    getCpf(): string {
        return this.cpf;
    }
    setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    getPassword(): string {
        return this.password;
    }
    setPassword(password: string): void {
        this.password = password;
    }

    getBalance(): number {
        return this.balance;
    }
    setBalance(balance: number) {
        this.balance = balance;
    }

    getAgency(): string {
        return this.agency;
    }
    setAgency(agency: string) {
        this.agency = agency;
    }

    getAccount(): string {
        return this.account;
    }
    setAccount(account: string) {
        this.account = account;
    }
}
const user1 = new User("Luca A.R.", "11111111111", "11111", "0001", "123465");
const user2 = new User("Pamela Oliveira", "22222222222", "22222", "0003", "512346");
const user3 = new User("Gabrielle Amaral", "33333333333", "33333", "0004", "456132");
const user4 = new User("Marcelly Monteiro", "44444444444", "44444", "0007", "748156");
const user5 = new User("Nathalie Bozzon", "55555555555", "55555", "0006", "896415");
const user0 = new User("0", "0", "0", "0", "0");

let registered_users: User[] = [user0, user1, user2, user3, user4, user5];

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

//Home page
app.get(('/'), (req, res) => {
    res.redirect('/historic');
});

app.get(('/historic'), (req, res) => {
    // console.log(transactions.historic)
    res.render('historic', { user: logged_user, transactions: transactions.historic })
});

app.post(('/add_transaction'), (req, res) => {
});

app.post('/login', (req, res) => {

    const {
        cpf, password
    } = req.body
    registered_users.forEach((element) => {
        
        console.log(element.getPassword() == password)
        console.log("ERROU: " + element)
        if (element.getCpf() == cpf && element.getPassword() == password) {
            console.log("ACERTOU: " + element)
            logged_user.name = element.getName();
            logged_user.cpf = element.getCpf();
            logged_user.account = element.getAccount();
            logged_user.agency = element.getAgency();
            logged_user.balance = element.getBalance();
            return res.redirect("/")
        }
    })

});

app.post('/logout', (req, res) => {

    logged_user.name = "";
    logged_user.cpf = "";
    logged_user.account = "";
    logged_user.agency = "";
    logged_user.balance = 0;
    return res.redirect('/historic');
});

app.listen(port, () => {
    console.log(`Server is running! (http://localhost:${port})`);
})
