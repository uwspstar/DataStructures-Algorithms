//https://leetcode.com/problems/design-in-memory-file-system/discuss/517754/Simple-C-Solution

public class FileSystem
{
    private readonly FileTreeNode root;

    public FileSystem()
    {
        root = new FileTreeNode(string.Empty);
    }

    public IList<string> Ls(string path)
    {
        FileTreeNode node = GetNodeFromPath(path, false);

        if (node.IsFile)
        {
            return new List<string> { node.Path };
        }

        return node.SubTreeNode.Keys.ToList();
    }

    public void Mkdir(string path)
    {
        GetNodeFromPath(path, true);
    }

    public void AddContentToFile(string filePath, string content)
    {
        FileTreeNode node = GetNodeFromPath(filePath, true);
        node.IsFile = true;
        node.Content += content;
    }

    public string ReadContentFromFile(string filePath)
    {
        FileTreeNode node = GetNodeFromPath(filePath, false);
        return node.Content;
    }

    private FileTreeNode GetNodeFromPath(string path, bool createIfNotExists)
    {
        string[] paths = path.Split('/').Where(p => !string.IsNullOrWhiteSpace(p)).ToArray();
        FileTreeNode currentNode = root;

        for (int i = 0; i < paths.Length; i++)
        {
            string p = paths[i];
            if (!currentNode.SubTreeNode.ContainsKey(p))
            {
                if (createIfNotExists)
                {
                    currentNode.SubTreeNode.Add(p, new FileTreeNode(p));
                }
                else
                {
                    throw new InvalidOperationException("Path not found");
                }
            }

            currentNode = currentNode.SubTreeNode[p];
        }

        return currentNode;
    }
}

public class FileTreeNode
{
    public bool IsFile { get; set; }

    public string Path { get; private set; }

    public SortedDictionary<string, FileTreeNode> SubTreeNode { get; private set; }

    public string Content { get; set; }

    public FileTreeNode(string path)
    {
        Path = path;
        SubTreeNode = new SortedDictionary<string, FileTreeNode>();
    }
}